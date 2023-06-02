const Header = (props) => {
  console.log(props);
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.course.parts[0].name}
        exercise={props.course.parts[0].exercise}
      />
      <Part
        part={props.course.parts[1].name}
        exercise={props.course.parts[1].exercise}
      />
      <Part
        part={props.course.parts[2].name}
        exercise={props.course.parts[2].exercise}
      />
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };
  const total =
    course.parts[0].exercise +
    course.parts[1].exercise +
    course.parts[2].exercise;

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total total={total} />
    </div>
  );
};

export default App;
