import MainMenuItem from "./mainMenuItem/MainMenuItem";

export default function MainMenu({className}) {
  return <>
    <ul className={className}>
      <MainMenuItem url="/admin">Panel głowny</MainMenuItem>
      <MainMenuItem url="/admin/calendar">Kalendarz</MainMenuItem>
      <MainMenuItem url="/admin/table">Tabela</MainMenuItem> 
      <MainMenuItem url="/admin/gallery">Galeria</MainMenuItem>
      <MainMenuItem url="/admin/regulation">Regulamin</MainMenuItem>
      <MainMenuItem url="/admin/questions">FAQ</MainMenuItem>
      <MainMenuItem url="/admin/contact">Kontakt</MainMenuItem>
    </ul>
  </>
}