const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercise={part.exercises} />
        );
      })}
    </div>
  );
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

const Total = ({ course }) => {
  const map_total = course.parts.map((part) => part.exercises);
  const reduce_total = map_total.reduce((acc, curr) => acc + curr);
  return <p>Number of exercises {reduce_total} </p>;
};

export default Course;
