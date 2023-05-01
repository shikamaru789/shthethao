const ButtonSport = ({
  title = "",
  active = false,
}: {
  title: any;
  active?: boolean;
}) => {
  return (
    <button className={active ? "button-link active" : "button-link"}>
      {title}
    </button>
  );
};

export default ButtonSport;
