import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const { authenticate, setAuthenticate } = useLoaderData();
  useEffect(() => {
    if (authenticate) {
      navigate("/");
    }
  }, [authenticate]);

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
  };
  return (
    <div className="h-screen flex flex-col sm:justify-between">
      <div className="pt-5">
        <div aria-label="login_header" className="shadow-lg sm:px-30 pb-4 px-4">
          <Link to="/" aria-label="logo" className="inline-block">
            <img
              className="w-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1029px-UNIQLO_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div aria-label="중앙" className="sm:px-30 ">
          <div className="text-xl sm:text-3xl py-8 px-4 sm:font-bold">
            로그인
          </div>
          <div className="flex flex-col sm:flex-row gap-20 p-4 ">
            <form
              className="space-y-10 "
              onSubmit={(e) => {
                loginUser(e);
              }}
            >
              <div className="">
                <div className="text-sm mb-2">아이디</div>
                <input
                  required
                  className="border-1 sm:w-120 h-10 w-full focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <div className="text-sm mb-2">비밀번호</div>
                <input
                  required
                  className="border-1 sm:w-120 w-full h-10 focus:outline-none"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-700 text-white rounded-4xl w-full sm:w-56 h-14 cursor-pointer"
              >
                로그인
              </button>
            </form>
            <div className="mb-10">
              <div className=" text-lg  mb-5 font-semibold">신규 회원가입</div>
              <button
                type="submit"
                className="border-1 w-full rounded-4xl sm:w-80 h-14"
              >
                신규 회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
      <div role="하단" className="bg-[#f4f4f4] bottom-0 w-full text-sm ">
        <div className="p-4 py-6 border-b-1 border-gray-400 sm:px-30">
          이용약관 | 개인정보처리방침
        </div>
        <div className="p-4 py-6 sm:px-30">
          Copyright &copy; NotUNIQLO Co., Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}
