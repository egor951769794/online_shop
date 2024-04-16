import './CatalogSubCategory.css';

type CatalogSubCategoryProps = {
  text: string;
}

export default function CatalogSubCategory(props: CatalogSubCategoryProps ) {

  return (
    <>
      <div className='subcat-title'>{props.text}</div>
    </>
  );
}
