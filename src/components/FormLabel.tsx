const FormLabel = (props: {
  name: string;
  label: string;
  hidden?: boolean;
}) => {
  return (
    <label
      htmlFor={props.name}
      className={
        'text-1.5xl font-bold mb-3.5 w-146' + (props.hidden ? ' sr-only' : '')
      }
    >
      {props.label}
    </label>
  );
};

export default FormLabel;
