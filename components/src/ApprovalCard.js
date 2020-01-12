import React  from 'react';


// ボタンクラスの関数を作る
const ApprovalCard = (props) => {
    console.log(props.children);

    return (
        <div className="ui card">
            <div className="content">Are you sure? </div>
            <div className="extra content">{props.children}</div>
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
        </div>
    );
};

export default ApprovalCard;

// https://qiita.com/yuta-ushijima/items/e611fcb7bb4d50ff42ea
// 参考にしたサイト（素晴らしい）