import { Link, useLoaderData, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const { setAuthenticate } = useLoaderData();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="h-screen">
      <div className="pt-5">
        <div aria-label="login_header" className="shadow-lg px-30 pb-4">
          <Link to="/" aria-label="logo" className="inline-block">
            <img
              className="w-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1029px-UNIQLO_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div aria-label="중앙" className="px-30 ">
          <div className="text-3xl py-8  font-bold">로그인</div>
          <div className="flex gap-20">
            <form
              className="space-y-10 "
              onSubmit={(e) => {
                loginUser(e);
              }}
            >
              <div>
                <div className="text-sm mb-2">아이디</div>
                <input
                  required
                  className="border-1 w-120 h-10 focus:outline-none"
                  type="text"
                />
              </div>
              <div>
                <div className="text-sm mb-2">비밀번호</div>
                <input
                  required
                  className="border-1 w-120 h-10 focus:outline-none"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-700 text-white rounded-4xl w-56 h-14 cursor-pointer"
              >
                로그인
              </button>
            </form>
            <div>
              <div className=" text-lg mb-5 font-semibold">신규 회원가입</div>
              <button type="submit" className="border-1 rounded-4xl w-80 h-14">
                신규 회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        role="하단"
        className="bg-[#f4f4f4] absolute bottom-0 w-full px-30 text-sm"
      >
        <div className="py-6">이용약관 | 개인정보처리방침</div>
        <div className="py-6">
          Copyright &copy; NotUNIQLO Co., Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}
