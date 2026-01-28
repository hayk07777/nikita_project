import add from "./HeaderAdd.module.scss";

export const HeaderAddPart = () => {
  return (
    <header>
      <div className={add.container}>
        <p>Հատուկ առաջարկ` 🔥 Բարձրացրեք Ձեր փորձառությունը Nikita-ի հետ</p>
        <a href="#">
          Տեսնել ավելին <span>➚</span>
        </a>
      </div>
    </header>
  );
};