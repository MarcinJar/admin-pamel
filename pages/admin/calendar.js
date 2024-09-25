import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import Month from "@/components/ui/month/Month";

export default function Calendar() {
  return (
    <DefaultLayout title="Kalendarz">
      <Month name="May 2022" days={31} start={6} end={5} />
    </DefaultLayout>
  );
}