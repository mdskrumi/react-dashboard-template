// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { toggleTheme, setSidebarOpen } from 'store/reducers/util';
import { RiMenuFoldLine } from 'react-icons/ri';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Languages } from 'i18n';
import DropDownButton from 'components/Elements/DropDownButton';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.util.theme);
    const isSidebarOpen = useAppSelector((state) => state.util.isSidebarOpen);

    const { i18n } = useTranslation();

    console.log(i18n);

    return (
        <>
            <div
                className={`fixed top-0 z-20 m-auto flex h-16 w-full select-none items-center justify-between border-b-[1px] border-light-gray300 bg-light-primary50 duration-300 dark:border-dark-gray300 dark:bg-dark-primary50`}
                style={{
                    marginLeft:
                        window.innerWidth > 1024
                            ? isSidebarOpen
                                ? '287px'
                                : '79px'
                            : '0',
                }}
            >
                <div>
                    <RiMenuFoldLine
                        size={'1.5em'}
                        className={`ml-4 cursor-pointer duration-300 ${
                            !isSidebarOpen && '-scale-x-100'
                        }`}
                        onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}
                    />
                </div>

                <div className="fixed right-6 top-4 flex cursor-pointer items-center gap-3">
                    <div>
                        <DropDownButton
                            title={Languages[i18n.resolvedLanguage!]}
                            variant="ghost"
                            itemList={Object.keys(Languages).map(
                                (language: string) => {
                                    return {
                                        title: Languages[language],
                                        handleClick: () => {
                                            i18n.changeLanguage(language);
                                        },
                                        disabled:
                                            i18n.resolvedLanguage === language,
                                    };
                                }
                            )}
                        />
                    </div>
                    <div onClick={() => dispatch(toggleTheme())}>
                        {theme === 'light' ? (
                            <FiMoon size="1.5rem" />
                        ) : (
                            <FiSun size="1.5rem" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
