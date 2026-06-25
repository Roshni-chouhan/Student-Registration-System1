import bgImage from "./assets/studentimage.png";

function App() {
  return (
    <div
      className="min-h-screen flex"
      style={{
        fontFamily: "'Times New Roman', serif",
      }}
    >
      {/* LEFT SIDE IMAGE */}
      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#001F54]/50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white font-bold text-center"
            style={{
              fontSize: "72px",
              lineHeight: "2.2",
              letterSpacing: "6px",
            }}
          >
            Student
            <br />
            Registration
            <br />
            Portal
          </h1>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-[#001233] flex items-center justify-center">
        <div className="w-[550px] bg-[#2A2760] p-12 rounded-3xl shadow-2xl border border-white/10">
          
          <h1
            className="text-white font-bold mb-3"
            style={{
              fontSize: "58px",
              lineHeight: "1.5",
              letterSpacing: "2px",
            }}
          >
            Create
            <br />
            Account
          </h1>

          <p
            className="text-blue-200 mb-10"
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              letterSpacing: "1px",
            }}
          >
            Student Registration Portal
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 mb-5 rounded-xl bg-[#4A4D86] text-white placeholder-gray-300 outline-none"
          />

          <input
            type="text"
            placeholder="Enrollment Number"
            className="w-full p-4 mb-5 rounded-xl bg-[#4A4D86] text-white placeholder-gray-300 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 mb-5 rounded-xl bg-[#4A4D86] text-white placeholder-gray-300 outline-none"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-4 mb-5 rounded-xl bg-[#4A4D86] text-white placeholder-gray-300 outline-none"
          />

          <select className="w-full p-4 mb-8 rounded-xl bg-[#4A4D86] text-white outline-none">
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science Engineering</option>
            <option value="IT">Information Technology</option>
            <option value="ECE">Electronics & Communication</option>
            <option value="ME">Mechanical Engineering</option>
          </select>

          <button
            className="w-full p-4 rounded-xl text-white font-bold text-xl
            bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#06B6D4]
            hover:opacity-90 transition"
            style={{
              letterSpacing: "1px",
            }}
          >
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;