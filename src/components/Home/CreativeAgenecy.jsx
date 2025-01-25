// components/CreativeAgency.js
export default function CreativeAgency() {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          We are a Creative Agency located in London
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black hover:bg-black hover:text-white border border-black rounded">
          View Our Work
        </button>
      </div>
    </section>
  );
}
