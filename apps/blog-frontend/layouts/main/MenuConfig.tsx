import { PATH_BLOGS, PATH_NOTES } from "@blog-frontend/routes/paths";
import Iconify from "@blog-frontend/components/Iconify";

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/",
  },

  {
    title: "Blogs",
    path: "/blogs",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Java",
        items: [
          { title: "Blog_1", path: PATH_BLOGS.blog_1 },
          { title: "Blog_2", path: PATH_BLOGS.blog_2 },
        ],
      },
      {
        subheader: "Javascript",
        items: [
          { title: "Blog_3", path: PATH_BLOGS.blog_1 },
          { title: "Blog_4", path: PATH_BLOGS.blog_2 },
        ],
      },
    ],
  },
  {
    title: "Quick notes",
    path: "/quicknotes",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Clean code",
        items: [
          { title: "The importance of clean code", path: PATH_NOTES.note_1 },
          {
            title: "Is it worth the time finding the well-structured methode",
            path: PATH_NOTES.note_2,
          },
        ],
      },
      {
        subheader: "Language A",
        items: [
          { title: "The importance of clean code", path: PATH_NOTES.note_1 },
          {
            title: "Is it worth the time finding the well-structured methode",
            path: PATH_NOTES.note_2,
          },
        ],
      },
      {
        subheader: "Language B",
        items: [
          { title: "The importance of clean code", path: PATH_NOTES.note_1 },
          {
            title: "Is it worth the time finding the well-structured methode",
            path: PATH_NOTES.note_2,
          },
        ],
      },
    ],
  },
];

export default menuConfig;
