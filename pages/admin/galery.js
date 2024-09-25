import Card from "@/components/card/Card";
import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import Thumbnail from "@/components/ui/thumbnail/Thumbnail";

export default function Galery() {
  const photoIds = [1, 20, 33, 44, 55, 66, 77, 88, 99, 111, 122, 133];

  return (
    <DefaultLayout title="Galeria">
      <Card className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        { photoIds.map(id => 
            <Thumbnail 
              key={id} 
              src={"https://picsum.photos/id/" + id + "/500"}
              title={id + "# zdjęce w galerii"}/>
        )}
      </Card>
    </DefaultLayout>
  )
}

 