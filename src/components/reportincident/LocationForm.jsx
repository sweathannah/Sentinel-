function LocationForm() {

    return (
      <section className="w-[37.5rem] bg-[#FFFFFF] p-6 font-poppins">
        <div className="flex justify-between items-center">
          <span className="flex gap-3">
            <img
              src="/images/reportincident_images/blue-location-line.svg"
              alt="Location icon"
            />
            <h5 className="text-[#212121] text-lg font-[500]">
              Select Location
            </h5>
          </span>
          <img
            src="/images/reportincident_images/close.svg"
            alt="A close icon"
          />
        </div>

        <div className="mt-6 bg-[#F8F8F8] rounded-[8px] border border-[#DDDDDD] p-6 h-[4.5rem] flex items-center gap-[6px]">
          <img
            src="/images/reportincident_images/search.svg"
            alt="A search icon"
            className="w-6 h-6"
          />
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            placeholder="Search Address"
            className="focus:border-none bg-transparent h-6"
          />
        </div>

        <div className="mt-6 h-[13.75rem] rounded-[4px]"></div>

        <div className="mt-6 text-[#515151] p-6">
          <span className="flex gap-[10px]">
            <img
              src="/images/reportincident_images/location-line.svg"
              alt="location logo"
              className="w-[20px] h-[20px]"
            />
            <p>School Park, Unilorin Campus</p>
          </span>
          <p className="mt-4 border border-[#D9D9D9] h-[69px] rounded-[12px] p-6">
            546748
          </p>
          <p className="mt-4 border border-[#D9D9D9] h-[69px] rounded-[12px] p-6">
            School Park
          </p>
          <p className="mt-4 border border-[#D9D9D9] h-[69px] rounded-[12px] p-6">
            Unilorin Campus
          </p>
        </div>

        <svg
          width="552"
          height="1"
          viewBox="0 0 552 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-6"
        >
          <line y1="0.5" x2="552" y2="1.5" stroke="#DDDDDD" />
        </svg>

        <button type="submit" className="mt-6 bg-[#2545FF] p- h-[69px] rounded-[12px] font-medium text-[18px] text-[#FFFFFF] w-full">
          Confirm location
        </button>
      </section>
    );
}

export default LocationForm;