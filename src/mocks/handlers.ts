import { rest } from "msw";

export const citaPersonaje = [
  {
    quote:
      "I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
    character: "Marge Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    characterDirection: "Right",
  },
];

export const citaRandom = [
  {
    quote:
      "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
  },
];

export const citaMilhouse = [
  {
    quote: "But my mom says I'm cool.",
    character: "Milhouse Van Houten",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
    characterDirection: "Right",
  },
];

export const handlers = [
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
    const character = req.url.searchParams.get("character");

    if (character) {
      if (character === "123") {
        return res(
          ctx.status(400),
          ctx.text("Por favor ingrese un nombre válido")
        );
      } else if (character === "pepe") {
        return res(ctx.status(200), ctx.json([]));
      } else if (character === "milhouse") {
        return res(ctx.status(200), ctx.json(citaMilhouse));
      }

      return res(ctx.status(200), ctx.json(citaPersonaje));
    }
    return res(ctx.status(200), ctx.json(citaRandom));
  }),
];
