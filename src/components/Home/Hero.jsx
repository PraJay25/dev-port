import Button from "./Button";

const Hero = () => {
  const handleButtonClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-cover bg-center text-black text-center py-20"
      style={{ backgroundImage: "url('/logo.png')" }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white">Shiv Prakash</h1>
        <p className="mt-4 text-lg text-gray-200">
          Dynamic developer specializing in crafting responsive, scalable web
          applications.
        </p>
        <div className="mt-6">
          <Button text="Get in Touch" onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
