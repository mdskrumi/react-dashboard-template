const TypographyPage: React.FC = () => {
    return (
        <div className="w-full">
            <div>
                <h1>This is Heading1 (H1)</h1>
                <h2>This is Heading2 (H2)</h2>
                <h3>This is Heading3 (H3)</h3>
                <h4>This is Heading4 (H4)</h4>
                <h5>This is Heading5 (H5)</h5>
                <h6>This is Heading6 (H6)</h6>
            </div>

            <div className="m-auto w-full">
                <p>This is Paragraph (P)</p>
                <caption>This is Caption (caption)</caption>
            </div>
        </div>
    );
};

export default TypographyPage;
