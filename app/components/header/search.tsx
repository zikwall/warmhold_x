export function Search() {
    return (
        <div className="header__search--widget d-none d-lg-block header__sticky--none">
            <form className="d-flex header__search--form border-radius-5" action="#">
                <div className="header__select--categories select">
                    <select className="header__select--inner">
                        <option selected value="1"> All categories</option>
                        <option value="2">Accessories</option>
                        <option value="3">Accessories & More</option>
                        <option value="4">Camera & Video</option>
                        <option value="5">Butters & Eggs</option>
                    </select>
                </div>
                <div className="header__search--box">
                    <label>
                        <input className="header__search--input" placeholder="Search For Products..."
                               type="text"/>
                    </label>
                    <button className="header__search--button bg__primary text-white"
                            aria-label="search button" type="submit">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}