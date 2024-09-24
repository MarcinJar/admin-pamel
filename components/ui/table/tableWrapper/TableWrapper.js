import Card from "@/components/card/Card";

export default function TableWrapper({children}) {
  return (
    <div>
      <Card className="overflow-x-auto mb-5">
        <table className="table border-collapse border border-blue-100 w-full bg-white">
          {children}
        </table>
      </Card>
    </div>
  )
}