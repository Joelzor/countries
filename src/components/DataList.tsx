interface IDataList<T> {
  array: T[];
  title: string;
}

const DataList = <T,>({ array, title }: IDataList<T>): JSX.Element => {
  if (!array || array.length === 0) {
    return (
      <p>
        <span className="font-black">{title}: </span>
        No data found
      </p>
    );
  }

  const names = array.join(", ");

  if (names[names.length - 2] === ",") {
    names.replace(",", "");
  }

  return (
    <p>
      <span className="font-black">{title}: </span>
      {names}
    </p>
  );
};

export default DataList;
