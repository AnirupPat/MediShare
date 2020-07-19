import React from 'react';
import { View } from 'react-native';
import { DetailsProps, DetailsState } from './types';
import { Card, RButton } from '../../atoms';
import { DetailsHolder } from '../../molecules/detail-holder/view';
import { DetailsHeader } from '../../molecules/detail-header/view';
import Constants from '../../../commons/constants/index';
import { AddressHolder } from '../../molecules/address-holder/view';
import { DetailsHolderVertical } from '../../molecules/detail-holder-vertical/view';
import { CommentHolder } from '../../molecules/comment/view';
import { ItemDetails } from '../../molecules/item-details/view';


export class Details extends React.Component<DetailsProps, DetailsState> {

    constructor(props: DetailsProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View>
                <Card>
                    <DetailsHeader icon="info" name="Basic Info" value={this.props.data.header.orderStatus.toUpperCase()} />
                    <DetailsHolder name="Order Number" value={this.props.data.header.orderId} />
                    <DetailsHolder name="Created On" value={this.props.data.header.createdOn} />
                    <DetailsHolder name="Due Date" value={this.props.data.header.dueDate} />
                    <DetailsHolder name="Assigned To" value={this.props.data.header.assignedTo} />
                    <DetailsHolder name="Last Activity" value={this.props.data.header.lastUpdatedOn.slice(0, 10)} />
                    <DetailsHolder name="Time Of Activity" value={this.props.data.header.lastUpdatedOn.slice(11, 19)} />
                    <DetailsHolder name="Changed By" value={this.props.data.header.changedBy} />
                    <RButton name="Show Events" onPress={this.props.onPress} />
                </Card>
                <Card>
                    <DetailsHeader icon="award" name="Price" />
                    <DetailsHolder name="Order Price" value={[this.props.data.header.currency, Constants.SPACE, this.props.data.header.orderPriceTotal].concat()} />
                    <DetailsHolder name="Delivery Cost" value={[this.props.data.header.currency, Constants.SPACE, this.props.data.header.deliveryCost].concat()} />
                </Card>
                <Card>
                    <DetailsHeader icon="at-sign" name="Customer Info" />
                    <DetailsHolder name="Name" value={this.props.data.header.customerName} />
                    <DetailsHolder name="Address Type" value={this.props.data.header.addressType === 1 ? 'Personal' : 'Business'} />
                    <AddressHolder
                        addressTitle="Delivery Address"
                        addr1={this.props.data.header.addr1}
                        addr2={this.props.data.header.addr2}
                        city={this.props.data.header.city}
                        county={this.props.data.header.county}
                        country={this.props.data.header.country}
                        postcode={this.props.data.header.postcode}
                    />
                </Card>
                <Card>
                    <DetailsHeader icon="clipboard" name="Item Details" />
                    <ItemDetails items={this.props.data.items}/>
                </Card>
                <Card>
                    <DetailsHeader icon="info" name="Other Info" />
                    <DetailsHolder name="Customer Type" value={this.props.data.header.guest ? "Guest" : "Registered"} />
                    <DetailsHolderVertical name="Contact Email" value={this.props.data.header.receiptEmail} />
                </Card>
                <Card>
                    <DetailsHeader icon="users" name="Comments" />
                    {this.props.data.header.comments.map((comment, index) => {
                        return (
                            <CommentHolder key={comment.id.toString()}
                                commentedBy={comment.commentedBy}
                                commentedOn={comment.commentedOn.replaceAll("T", " ")}
                                text={comment.text}
                            />
                        )
                    })}
                    <RButton name="Add Comment" onPress={this.props.data.addCommentHandler}/>
                </Card>
            </View>
        )
    }
}
