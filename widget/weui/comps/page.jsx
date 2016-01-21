import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;
        return (
            <section className={`page ${className}`}>
                <div className="hd">
                    <h1 className="title">{title}</h1>
                    <p className="sub_title">{subTitle}</p>
                </div>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};

export default Page