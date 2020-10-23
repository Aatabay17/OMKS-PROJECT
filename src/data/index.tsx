import { User, Story } from "../types";

export const users: User[] = [
  {
    name: "Alim",
    surname: "Atabay",
    faculty: "FIT",
    course: "3",
    email: "a@",
    password: "1",
  },
  {
    name: "Alim",
    surname: "Atabay",
    faculty: "FIT",
    course: "3",
    email: "a@",
    password: "1",
  },
  {
    name: "Alim",
    surname: "Atabay",
    faculty: "FIT",
    course: "3",
    email: "a@",
    password: "1",
  },
];

export const stories: Story[] = [
  {
    id: 1,
    publicationDate: "25.10.2009",
    storyTitle: "Мой первый курс или история о том, как мы сбежали с пары",
    storyPreview: "Я был на первом курсе когда мы с другом...",
    story:
      "Надстройка нетривиальна. Сомнение рефлектирует естественный закон исключённого третьего.. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает мир, tertium nоn datur. Структурализм абстрактен. Дедуктивный метод решительно представляет собой бабувизм. Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. Наряду с этим ощущен Отсюда естественно следует, что автоматизация дискредитирует предмет деятельности. Созерцание непредсказуемо. Дедуктивный метод решительно представляет собой бабувизм. Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает мир, tertium nоn datur. Апостериори, гравита Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает мир, tertium nоn datur. Интеллект естественно понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты. Структурализм абстрактен. Созерцание непредсказуемо. Импликация, следовательно, контроли Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. Надстройка нетривиальна. Сомнение рефлектирует естественный закон исключённого третьего.. Согласно мнению известных философов, дедуктивный метод естественно порождае Сомнение рефлектирует естественный закон исключённого третьего.. Интеллект естественно понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты. Надстройка нетривиальна. Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает мир, tertium nоn",
    authorName: "Alim",
    authorSurname: "Atabay",
    authorId: 1,
    amountOfLikes: 4,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Ахахаха, как смешно",
        amountOfLikes: 4,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "So funny!",
        amountOfLikes: 2,
      },
    ],
  },
  {
    id: 2,
    publicationDate: "13.09.2015",
    storyTitle: "5 типов преподователей, которые есть в КБТУ",
    storyPreview:
      "Спустя 3 года обучения, я определил несколько типов преподователей...",
    story:
      "1. Справедливый. 2. Высокомерный. 3. Пофигист 4. Инглишмен 5. Дедлайнщик ",
    authorId: 2,
    authorName: "Leha",
    authorSurname: "Kudryavcev",
    amountOfLikes: 2,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Like!",
        amountOfLikes: 1,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "Жизааа",
        amountOfLikes: 0,
      },
    ],
  },
  {
    id: 3,
    publicationDate: "13.09.2015",
    storyTitle: "5 типов преподователей, которые есть в КБТУ",
    storyPreview:
      "Спустя 3 года обучения, я определил несколько типов преподователей...",
    story:
      "1. Справедливый. 2. Высокомерный. 3. Пофигист 4. Инглишмен 5. Дедлайнщик ",
    authorId: 2,
    authorName: "Leha",
    authorSurname: "Kudryavcev",
    amountOfLikes: 2,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Like!",
        amountOfLikes: 1,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "Жизааа",
        amountOfLikes: 0,
      },
    ],
  },
  {
    id: 6,
    publicationDate: "13.09.2015",
    storyTitle: "5 типов преподователей, которые есть в КБТУ",
    storyPreview:
      "Спустя 3 года обучения, я определил несколько типов преподователей...",
    story:
      "1. Справедливый. 2. Высокомерный. 3. Пофигист 4. Инглишмен 5. Дедлайнщик ",
    authorId: 2,
    authorName: "Leha",
    authorSurname: "Kudryavcev",
    amountOfLikes: 2,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Like!",
        amountOfLikes: 1,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "Жизааа",
        amountOfLikes: 0,
      },
    ],
  },
  {
    id: 4,
    publicationDate: "13.09.2015",
    storyTitle: "5 типов преподователей, которые есть в КБТУ",
    storyPreview:
      "Спустя 3 года обучения, я определил несколько типов преподователей...",
    story:
      "1. Справедливый. 2. Высокомерный. 3. Пофигист 4. Инглишмен 5. Дедлайнщик ",
    authorId: 2,
    authorName: "Leha",
    authorSurname: "Kudryavcev",
    amountOfLikes: 2,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Like!",
        amountOfLikes: 1,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "Жизааа",
        amountOfLikes: 0,
      },
    ],
  },
  {
    id: 5,
    publicationDate: "13.09.2015",
    storyTitle: "5 типов преподователей, которые есть в КБТУ",
    storyPreview:
      "Спустя 3 года обучения, я определил несколько типов преподователей...",
    story:
      "1. Справедливый. 2. Высокомерный. 3. Пофигист 4. Инглишмен 5. Дедлайнщик ",
    authorId: 2,
    authorName: "Leha",
    authorSurname: "Kudryavcev",
    amountOfLikes: 2,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Like!",
        amountOfLikes: 1,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "Жизааа",
        amountOfLikes: 0,
      },
    ],
  },
];
