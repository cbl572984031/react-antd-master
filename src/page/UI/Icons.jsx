import React, { Component } from 'react';
import { Row, Col, Card, Icon, message } from 'antd';
import ClipboardJS from 'clipboard'

const iconList = ["home", "question-circle-o", "question-circle", "plus", "plus-circle-o", "plus-circle", "pause", "pause-circle-o", "pause-circle", "minus", "minus-circle-o", "minus-circle", "plus-square", "plus-square-o", "minus-square", "minus-square-o", "info", "info-circle-o", "info-circle", "exclamation", "exclamation-circle-o", "exclamation-circle", "close", "close-circle", "close-circle-o", "close-square", "close-square-o", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "clock-circle-o", "clock-circle", "android", "android-o", "apple", "apple-o", "windows", "windows-o", "ie", "chrome", "github", "aliwangwang", "aliwangwang-o", "dingding", "dingding-o", "lock", "unlock", "area-chart", "pie-chart", "bar-chart", "dot-chart", "bars", "book", "calendar", "cloud", "cloud-download", "code", "code-o", "copy", "credit-card", "delete", "desktop", "download", "edit", "ellipsis", "file", "file-text", "file-unknown", "file-pdf", "file-excel", "file-jpg", "file-ppt", "file-add", "folder", "folder-open", "folder-add", "hdd", "frown", "frown-o", "meh", "meh-o", "smile", "smile-o", "inbox", "laptop", "appstore-o", "appstore", "line-chart", "link", "mail", "mobile", "notification", "paper-clip", "picture", "poweroff", "reload", "search", "setting", "share-alt", "shopping-cart", "tablet", "tag", "tag-o", "tags", "tags-o", "to-top", "upload", "user", "video-camera", "home", "loading", "loading-3-quarters", "cloud-upload-o", "cloud-download-o", "cloud-upload", "cloud-o", "star-o", "star", "heart-o", "heart", "environment", "environment-o", "eye", "eye-o", "camera", "camera-o", "save", "team", "solution", "phone", "filter", "exception", "export", "customer-service", "qrcode", "scan", "like", "like-o", "dislike", "dislike-o", "message", "pay-circle", "pay-circle-o", "calculator", "pushpin", "pushpin-o", "bulb", "select", "switcher", "rocket", "bell", "disconnect", "database", "compass", "barcode", "hourglass", "key", "flag", "layout", "printer", "sound", "usb", "skin", "tool", "sync", "wifi", "car", "schedule", "user-add", "user-delete", "usergroup-add", "usergroup-delete", "man", "woman", "shop", "gift", "idcard", "medicine-box", "red-envelope", "coffee", "copyright", "trademark", "safety", "wallet", "bank", "trophy", "contacts", "global", "shake", "api"]
class Icons extends Component {

    componentDidMount() {
        new ClipboardJS('li')
        this.props.setBG(false)
    }

    handlerCopy = () => {
        message.success('copy success!')
    }

    render() {
        return (
            <div className='icon_dome'>
                <Row gutter={24}>
                    <Col md={12}>
                        <Card bordered={false}>
                            <Icon type="home" />
                            <Icon type="setting" theme="filled" />
                            <Icon type="smile" theme="outlined" />
                            <Icon type="sync" spin />
                            <Icon type="smile" rotate={180} />
                            <Icon type="loading" />
                        </Card>
                    </Col>

                    <Col md={12}>
                        <Card bordered={false}>
                            <Icon type="smile" theme="twoTone" />
                            <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                            <Icon type="thunderbolt" theme="twoTone" twoToneColor="#0f0" />
                            <Icon type="star" theme="twoTone" spin />
                        </Card>
                    </Col>

                    <Col sm={24}>
                        <Card bordered={false} title='点击复制'>
                            <ul className="list">
                                {
                                    iconList.map((item, index) => {
                                        return (
                                            <li key={index} onClick={this.handlerCopy} data-clipboard-text={`<Icon type="${item}" />`}>
                                                <Icon type={item} />
                                                <p>{item}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Icons;