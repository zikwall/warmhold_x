function Star() {
    return (
        <span className="rating__icon">
           <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path
               d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
               fill="currentColor"/>
           </svg>
        </span>
    );
}

function EmptyStar() {
    return (
        <span className="rating__icon">
           <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path
               d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
               fill="currentColor"/>
           </svg>
        </span>
    );
}

function NotStars() {
    return (
        <ul className="rating product__card--rating d-flex">
            <li className="rating__list">
                <EmptyStar />
            </li>
            <li className="rating__list">
                <EmptyStar />
            </li>
            <li className="rating__list">
                <EmptyStar />
            </li>
            <li className="rating__list">
                <EmptyStar />
            </li>
            <li className="rating__list">
                <EmptyStar />
            </li>
        </ul>
    );
}

interface RatingProps {
    value: number;
}

export default function Rating({value}: RatingProps) {
    if (value == 0) {
        return <NotStars />
    }

    let filledNeed = 5 - value;
    let emptyNeed = 5 - filledNeed;

    let filled = [];
    for(let i= 0; i<filledNeed;i++){
        filled[i] = <li key={i} className="rating__list"><Star /></li>;
    }

    let empty = [];
    for(let i= 0; i<emptyNeed;i++){
        empty[i] = <li key={i} className="rating__list"><EmptyStar /></li>;
    }

    return (
        <ul className="rating product__card--rating d-flex">
            {filled}
            {empty}
            <li>
                <span className="rating__review--text">(126) Отзывов</span>
            </li>
        </ul>
    );
}