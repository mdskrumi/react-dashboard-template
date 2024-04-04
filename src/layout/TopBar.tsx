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
                className={`m-auto fixed items-center justify-between flex h-16 top-0 w-full border-b-[1px] border-line dark:border-line-dark bg-surface dark:bg-surface-dark select-none duration-300 z-20`}
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
                        className={`duration-300 ml-4 cursor-pointer ${
                            !isSidebarOpen && '-scale-x-100'
                        }`}
                        onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}
                    />
                </div>

                <div className="fixed right-6 top-4 cursor-pointer flex gap-3 items-center">
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
