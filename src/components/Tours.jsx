import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } =
            tour;
          return (
            <Tour
              key={id}
              img={image}
              date={date}
              title={title}
              info={info}
              location={location}
              duration={duration}
              cost={cost}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
