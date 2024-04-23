import './CatalogCategory.css';
import Link from '../Link/Link';
import { Category } from 'src/data/Categories';

import CatalogSubCategory from '../CatalogSubCategory/CatalogSubCategory';
import { useNavigate } from 'react-router-dom';

type CatalogCategoryProps = {
  cats: Category[];
}

export default function CatalogCategory({cats}: CatalogCategoryProps ) {

  const navigate = useNavigate()

  return (
    <>
      <div className='cat-container'>
        {cats.map((cat) =>
          <div className='subcats-list'>
            <Link 
              content={<div className='cat-title'>{cat.title}</div>} 
              handler={() => navigate("/items", {state: {catId: cat.categoryId}})}
            />
            {cat.subCategories?.map((subcat) => 
              <Link
                handler={() => navigate("/items", {state: {catId: subcat.categoryId}})}
                content={<CatalogSubCategory text={subcat.title}/>}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
