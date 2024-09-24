import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import Article from "@/components/ui/article/Article";

export default function Regulation() {
  return (
    <DefaultLayout title="Regulamin usługi">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <Article
          title="Regulamin naszej usługi"
          author="Jan Nowak"
          date="2024-09-24">
          <p className="article-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            ligula vel suscipit lobortis, mauris quam lacinia lectus, at semper velit
            urna in enim. Sed gravida, orci eu eleifend mattis, metus justo
            condimentum ante, vel convallis ipsum nunc id neque. Donec ullamcorper
            aliquet nisi, at hendrerit purus faucibus et. Donec et turpis vel nunc
            tincidunt consectetur. Donec in sapien euismod, dignissim sapien vel,
            dignissim velit. Sed sed justo vel ex rhoncus condimentum. Nulla facilisi.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Proin euismod, mauris vel venenatis elementum, dolor
          </p>
          <p className="article-p">
            Donec ullamcorper aliquet nisi, at hendrerit purus faucibus et. Donec et 
            turpis vel nunc tincidunt consectetur. Donec in sapien euismod, dignissim 
            sapien vel, dignissim velit. Sed sed justo vel ex rhoncus condimentum. Nulla 
            facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
            posuere cubilia Curae; Proin euismod, mauris vel venenatis elementum, dolor
          </p>
          <p className="article-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            ligula vel suscipit lobortis, mauris quam lacinia lectus, at semper velit
            urna in enim. Sed gravida, orci eu eleifend mattis, metus justo
            condimentum ante, vel convallis ipsum nunc id neque. Donec ullamcorper
            aliquet nisi, at hendrerit purus faucibus et. Donec et turpis vel nunc
            tincidunt consectetur. Donec in sapien euismod, dignissim sapien vel,
            dignissim velit. Sed sed justo vel ex rhoncus condimentum. Nulla facilisi.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Proin euismod, mauris vel venenatis elementum, dolor
          </p>
        </Article>
      </div>
    </DefaultLayout>
  )
}