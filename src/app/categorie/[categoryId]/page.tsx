import ListImages from "@/components/ListImages";
import Layout from "@/components/Layout";

const Categorie = ({ params }: { params: { categoryId: string } }) => {
  const param = params.categoryId;
  return (
    <Layout title={param}>
      <ListImages category={param} />
    </Layout>
  );
};

export default Categorie;
