import counterStore from "../stores/counterStore";
export default function Counter() {
  const { count, increase, decrease, increaseBy, decreaseBy } = counterStore();
  return (
    <div className="relative">
      <img
        className="w-100"
        src="https://static.vecteezy.com/system/resources/previews/044/643/704/non_2x/pixel-computer-monitor-in-game-8-bit-display-on-a-white-background-90s-style-screen-monoblock-technology-device-retro-style-color-image-isolated-object-illustration-vector.jpg"
        alt=""
      />
      <div className="select-none text-6xl font-bold absolute top-[50%] left-[50%] translate-y-[-100%] translate-x-[-50%] text-white">
        {count}
      </div>
    </div>
  );
}
