import moment from "moment";

export const genDateToVietnamese = (date: string | Date) => {
  const value = new Date(date).getDay();

  switch (value) {
    case 0:
      return "Chủ nhật";

    case 1:
      return "Thứ hai";

    case 2:
      return "Thứ ba";

    case 3:
      return "Thứ tư";

    case 4:
      return "Thứ năm";

    case 5:
      return "Thứ sáu";

    case 6:
      return "Thứ bảy";

    default:
      return "";
  }
};

export const convertToRoundVietnamese = (str: string) => {
  switch (str) {
    case "Quarter-finals":
      return `Tứ kết`;

    case "Semi-finals":
      return "Bán kết";

    case "Final":
      return `Chung kết`;

    default:
      return str;
  }
};

export const genRound = (round_int: number, round: string) => {
  if (round_int) {
    return `Vòng ${round_int}`;
  }

  return convertToRoundVietnamese(round);
};

export const reverseDate = (date: string) => {
  const dateArray = date.split("-");

  return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
};

export const listChampionLeague = [4335, 4378, 4346, 4399, 4347];

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

    if (list.includes(key) && value?.find((e: any) => e === index)) type = key;
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

export const genPositionPlayer = (value: string) => {
  switch (value) {
    case "G":
      return `Thủ môn`;

    case "D":
      return `Hậu vệ`;

    case "M":
      return `Tiện vệ`;

    case "F":
      return `Tiền đạo`;

    default:
      return ``;
  }
};

export const formatDate = (item: any) => {
  const dateMoment = moment(item);
  const today = moment();
  if (dateMoment.isSame(today, "day")) {
    return `Hôm nay, ${dateMoment?.format("HH:mm")}`;
  } else if (dateMoment.isSame(today.clone().add(1, "day"), "day")) {
    return `Ngày mai, ${dateMoment?.format("HH:mm")}`;
  } else if (dateMoment.isSame(today.clone().add(-1, "day"), "day")) {
    return `Hôm qua`;
  } else {
    return `${genDateToVietnamese(item)}, ${moment(item).format("HH:mm")}`;
  }
};
