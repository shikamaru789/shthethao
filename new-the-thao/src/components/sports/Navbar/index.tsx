import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SportNavbar = () => {
  const menu = [
    {
      parent: {
        label: "Ngoại hạng Anh",
        id: 4335,
      },
      child: [
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
      ],
    },

    {
      parent: {
        label: "Champions League",
        id: 4314,
      },
      child: [
        {
          label: "Champions League",
          id: 4314,
        },
        {
          label: "Europa League",
          id: 4584,
        },
      ],
    },

    {
      parent: {
        label: "La Liga",
        id: 4378,
      },
      child: [
        {
          label: "La Liga",
          id: 4378,
        },
        {
          label: "Cúp Nhà vua",
          id: 4827,
        },
      ],
    },

    {
      parent: {
        label: "Bundesliga",
        id: 4346,
      },
      child: [
        {
          label: "Bundesliga",
          id: 4346,
        },
        {
          label: "Cúp QG Đức",
          id: 4303,
        },
      ],
    },

    {
      parent: {
        label: "Seri A",
        id: 4399,
      },
      child: [
        {
          label: "Seri A",
          id: 4399,
        },
        {
          label: "Cúp QG Italy",
          id: 4472,
        },
      ],
    },

    {
      parent: {
        label: "Ligue 1",
        id: 4347,
      },
      child: [
        {
          label: "Ligue 1",
          id: 4347,
        },
        {
          label: "Cúp QG Pháp",
          id: 4854,
        },
      ],
    },

    {
      parent: {
        label: "V-League",
        id: 4976,
      },
    },

    {
      parent: {
        label: "Nations League",
        id: 4260,
      },
    },
  ];

  const param = useRouter();

  return (
    <nav className="sport-nav-block">
      <ul className="sport-nav">
        {menu.map((item) => {
          return (
            <li key={item.parent.id}>
              <a href={`#`}>{item.parent.label}</a>
              <ul>
                {item.child?.map((itemSub) => {
                  return (
                    <li>
                      <a href={`/the-thao/chi-tiet-giai/${itemSub.id}`}>
                        {itemSub.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SportNavbar;
