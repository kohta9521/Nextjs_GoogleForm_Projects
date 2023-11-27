import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const schema = zod.object({
  name: zod.string().min(1, { message: "必須項目です" }),
  age: zod
    .string()
    .refine((value) => {
        const parsedValue = Number(value);
        return !isNaN(parsedValue) && parsedValue >= 2;
    }, {
        message: "年齢は2桁以上である必要があります",
    }),
});

const FormURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdoEPMH6l3l3gauGBpBsZaxyIGFUYLvggYAc6UWDfZ3iPj2lg/viewform?usp=sf_link";

const FormFieldNames = {
  name: "entry.1528822416",
  age: "entry.711162792",
};

const fetcher = async (url: string, data: Record<string, any>) => {
  await fetch(FormURL, {
    method: "GET",
    body: provideUrlEncodedFormData(data),
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

function provideUrlEncodedFormData(originalFormData: Record<string, any>) {
  const result: Record<string, any> = {};
  Object.keys(originalFormData).map(
    (key) => (result[FormFieldNames[key]] = originalFormData[key])
  );
  return new URLSearchParams(result).toString();
}

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Record<string, any>) => {
    try {
      await fetcher(FormURL, data);
      // 成功後の処理を記述する (画面遷移とか)
    } catch (e) {
      alert("送信に失敗しました。ネットワーク状況を確認してください");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fom-item">
          <label>
            <p>名前</p>
            <input type="text" {...register("name")} />
          </label>
          <p className="error-message">{errors.name?.message}</p>
        </div>
        <div className="form-item">
          <label>
            <p>年齢</p>
            <input type="text" {...register("age")} />
          </label>
          <p className="error-message">{errors.age?.message}</p>
        </div>
        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default App;
