import { useAppContext } from '../../../../../../context';
import { AppSignatureProps } from '../../../../../../types/AppPart';

const HeaderLive = () => {
    const { website } = useAppContext();
    const { appPartControlsLive } = website;

    const websiteDetailsCode = appPartControlsLive?.["website-detiles"]?.code;

    if (!websiteDetailsCode || websiteDetailsCode !== 1) return null;

    return (
        <One_Signature data={appPartControlsLive as AppSignatureProps} />
    );
};

export default HeaderLive;

interface DataProps {
    data: AppSignatureProps;
}

const One_Signature = ({ data }: DataProps) => {
    return (
        <div className={`flex items-${data.alignment.pos} flex-col w-full`}>
            {data.ui.active === 2 ? (
                <img src={data.custom.image} alt="Custom Image" style={{ width: data.font.size }} />
            ) : (
                <>
                    {data.ui.active === 0 ? (
                        <>
                            <p className='p-0 m-0'>
                                {data.signoff.family === "Custom" ? data.signoff.value : data.signoff.family}
                            </p>
                            {data['sign-as'].show && data['sign-as'].value && (
                                <img src={data.custom.image} alt="Custom Image" style={{ width: `${data.font.size + 200}px` }} />
                            )}
                        </>
                    ) : (
                        <img src={data.custom.image} alt="Custom Image" style={{ width: `${data.font.size}px` }} />
                    )}
                </>
            )}
            {/* {JSON.stringify(data)} */}
        </div>
    );
};

