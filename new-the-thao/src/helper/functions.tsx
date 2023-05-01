export const convertFormeToView = (forme: string) => {
  const view = [];

  for (let i = 0; i < forme?.length; i++) {
    const text = forme.charAt(i);
    if (text === "L") {
      view.push(
        <div
          key={i}
          style={{
            margin: "0px 4px",
            background: "#F34848",
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          B
        </div>
      );
    } else if (text === "D") {
      view.push(
        <div
          key={i}
          style={{
            margin: "0px 4px",
            background: "#717386",
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          H
        </div>
      );
    } else {
      view.push(
        <div
          key={i}
          style={{
            margin: "0px 4px",
            background: "#59C541",
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          T
        </div>
      );
    }
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyItems: "center" }}
    >
      {view?.map((item) => {
        return item;
      })}
    </div>
  );
};

const listColorStanding = [
  {
    id: 4335,
    first: [1, 2, 3, 4],
    second: [5],
    third: [6],
    fourth: [18, 19, 20],
  },
  {
    id: 4378,
    first: [1, 2, 3, 4],
    second: [5],
    third: [6],
    fourth: [18, 19, 20],
  },
  {
    id: 4346,
    first: [1, 2, 3, 4],
    second: [5],
    third: [6],
    fourth: [16],
    // xuống hạng thẳng
    firth: [17, 18],
  },
  {
    id: 4399,
    first: [1, 2, 3, 4],
    second: [5],
    third: [6],
    fourth: [18, 19, 20],
  },
  {
    id: 4347,
    first: [1, 2],
    second: [3],
    third: [4],
    fourth: [18],
    // xuống hạng thẳng
    firth: [19, 20],
    // Dự sơ loại Europa League
    sixth: [5],
  },
  {
    id: 4976,
    first: [1, 2, 3, 4, 5, 6, 7, 8],
    fourth: [9, 10, 11, 12, 13, 14],
  },
  {
    id: 4314,
    first: [1, 2],
    second: [3],
  },
  {
    id: 4584,
    first: [1, 2],
  },
];

export const renderColorStanding = (id: number, index: number) => {
  const temp = listColorStanding?.find((item) => item.id === id);
  let type = "";

  if (!temp)
    return {
      background: "#fff",
      color: "#000",
    };

  Object.entries(temp).forEach((item) => {
    const [key, value] = item;

    const list = ["first", "second", "third", "fourth", "firth", "sixth"];

    if (list.includes(key) && value?.find((e: number) => e === index))
      type = key;
  });

  switch (type) {
    case "first":
      return {
        background: "#306EE5",
        color: "#fff",
      };

    case "second":
      return {
        background: "#33579C",
        color: "#fff",
      };

    case "third":
      return {
        background: "#2A374F",
        color: "#fff",
      };

    case "fourth":
      return {
        background: "#F34848",
        color: "#fff",
      };
    case "firth":
      return {
        background: "#C23E3E",
        color: "#fff",
      };

    case "sixth":
      return {
        background: "#9C3372",
        color: "#fff",
      };

    default:
      return {
        background: "#fff",
        color: "#000",
      };
  }
};
