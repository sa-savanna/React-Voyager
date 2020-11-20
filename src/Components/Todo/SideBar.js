import React from 'react'
import {
    MDBContainer,
    MDBTreeview,
    MDBTreeviewList,
    MDBTreeviewItem
} from 'mdbreact';



const SideBar = () => {
    return (
        <MDBContainer header='Animated'>
            <MDBTreeview
                theme='animated'
                header='Folders'
                className='border-secondary'
                getValue={value => console.log(value)}
            >
                <MDBTreeviewList icon='envelope-open' title='Mail' far>
                    <MDBTreeviewItem icon='address-book' title='Contact' far />
                    <MDBTreeviewItem icon='bell' title='Offer' far />
                    <MDBTreeviewList icon='calendar' title='Calendar' far>
                        <MDBTreeviewItem icon='clock' title='Deadlines' far />
                        <MDBTreeviewItem icon='users' title='Meetings' />
                        <MDBTreeviewItem icon='basketball-ball' title='Workouts' />
                        <MDBTreeviewItem icon='mug-hot' title='Events' />
                    </MDBTreeviewList>
                </MDBTreeviewList>
                <MDBTreeviewList title='Inbox' far>
                    <MDBTreeviewItem title='Admin' far />
                    <MDBTreeviewItem title='Corporate' far />
                    <MDBTreeviewItem title='Finance' far />
                    <MDBTreeviewItem title='Other' far />
                </MDBTreeviewList>
                <MDBTreeviewList icon='gem' title='Favourites' far>
                    <MDBTreeviewItem icon='pepper-hot' title='Restaurants' />
                    <MDBTreeviewItem icon='eye' title='Places' far />
                    <MDBTreeviewItem icon='gamepad' title='Games' />
                    <MDBTreeviewItem icon='cocktail' title='Cocktails' />
                    <MDBTreeviewItem icon='pizza-slice' title='Food' />
                </MDBTreeviewList>
                <MDBTreeviewItem icon='comment' title='Notes' far />

            </MDBTreeview>

        </MDBContainer>
    )
}

export default SideBar
