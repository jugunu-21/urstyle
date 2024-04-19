const Faq = () => {
    return (
      <div className="  ">
        <div className="py-4">
          <h4 className=" py-1   font-semibold ">What format are these icons?</h4>
          <p className=" ">
            The icons are in SVG (Scalable Vector Graphic) format. They can be
            imported into your design tool of choice and used directly in code.
          </p>
        </div>
        <div className="py-2">
          <h4 className=" py-1    font-semibold ">
            Can I use the icons at different sizes?
          </h4>
          <p className="">
            Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be
            scaled to different sizes as needed. We don't recommend going smaller
            than 20 x 20 or larger than 64 x 64 to retain legibility and visual
            balance.
          </p>
        </div>
        <div className="py-2">
          <h4 className=" py-1   font-semibold ">
            Do I have to add attribution to my projects?
          </h4>
          <p className="">
            No. You are allowed to use these icons freely in your personal and
            professional work. If you enjoy the icon pack, feel free to tell
            others!
          </p>
        </div>
      </div>
    );
  };
export default Faq;