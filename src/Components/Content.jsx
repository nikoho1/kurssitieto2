import Part from "./Part";
import { PropTypes } from "prop-types";
import Total from "./Total";

const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts} />
      <Total parts={parts} />
    </>
  );
};

Content.propTypes = {
  parts: PropTypes.array,
};

export default Content;
