export default function Card() {
  return (
    <div className="cursor-pointer hover:shadow-lg w-52 h-full rounded-lg overflow-hidden bg-white">
      <img
        src="https://raketdotph.s3.ap-southeast-1.amazonaws.com/small_14_4f1a2306e1.png"
        alt=""
        className="w-full h-full"
      />
      <div className="p-2 space-y-3">
        <h3 className="font-semibold leading-tight">
          I create UGC Videos for Social Media
        </h3>
        <p className="text-xs text-slate-600 font-light">From $400</p>
        <hr />
        <div className="flex items-center gap-2 ">
          <img
            src="https://raketdotph.s3.ap-southeast-1.amazonaws.com/thumbnail_LOGO_1_658d24db38.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <div className="w-full flex items-center justify-between">
              <p className="text-xs font-light text-gray-600">thevacamp</p>
              <p className="text-xs font-light text-gray-600">5 (10)</p>
            </div>
            <div className="w-full flex gap-2 items-center justify-center">
              <p className="text-[8px] font-light text-gray-600">ID CHECKED</p>
              <p className="text-[8px] font-light text-gray-600">
                VERIFIED PRO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
