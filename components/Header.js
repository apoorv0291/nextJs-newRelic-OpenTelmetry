import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>HeaderSrtyles</h1>
            <h2 className="red">This is a common header</h2>
            <style jsx>
                {`
                    .red {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
};
export default Header;
