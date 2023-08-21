"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import getYoutubeId from "get-youtube-id";
import { CgSpinner } from "react-icons/cg";
import {ytApi} from "@/helpers/ytApi";

export default function Form({fetchData}) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    const yt_id = getYoutubeId(data.yturl);
    const response = await ytApi(yt_id);
    await fetchData(response);
    setLoading(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-lg items-center  flex-col gap-2 sm:flex-row"
      >
        <input
          className="flex h-10 bg-white w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black  disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Youtube Link or URL"
          {...register("yturl", { required: true })}
        ></input>
        <button
          className={`${
            loading
              ? " bg-black/80 hover:bg-black/80 cursor-not-allowed"
              : "bg-black hover:bg-black/80"
          }
              flex gap-2 items-center justify-center rounded-md  px-5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full sm:w-auto`}
          type="submit"
          disabled={loading}
        >
          {loading && <CgSpinner className="animate-spin" />}

          <span>{loading ? "Processing...." : "Download"}</span>
        </button>
      </form>
    </>
  );
}
