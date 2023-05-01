const menu = [

    {
        label: "Ngoại hạng Anh",
        id: 4335,
    },
    {
        label: "Cup FA",
        id: 4530,
    },
    {
        label: "Cúp liên đoàn",
        id: 4377,
    },

    {
        label: "Champions League",
        id: 4314,
    },
    {
        label: "Europa League",
        id: 4584,
    },

    {
        label: "La Liga",
        id: 4378,
    },
    {
        label: "Cúp Nhà vua",
        id: 4827,
    },

    {
        label: "Bundesliga",
        id: 4346,

    },
    {
        label: "Cúp QG Đức",
        id: 4303,
    },
    {
        label: "Seri A",
        id: 4399,
    },
    {
        label: "Cúp QG Italy",
        id: 4472,
    },


    {
        label: "Ligue 1",
        id: 4347,
    },
    {
        label: "Cúp QG Pháp",
        id: 4854,
    },


    {
        label: "V-League",
        id: 4976,
    },

    {
        label: "Nations League",
        id: 4260,
    },
];

const getLeagueById = (leagueId: number) => {
    return menu.find(item => item.id === leagueId)
}

export default getLeagueById