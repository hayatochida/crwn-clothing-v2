import { Fragment, useEffect } from 'react';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectCategoriesIsLaoding, selectCategoriesMap } from '../../store/categories/category.selector';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import './category.styles';
import { CategoryContainer, CategoryTitle } from './category.styles';

type CategoryRouteParams = {
    category: string;
};


const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    // console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLaoding);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        // console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </CategoryContainer>
            )}
        </Fragment>
    );
};
export default Category;