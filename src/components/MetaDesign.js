import React, {Fragment} from 'react';

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

import UniformCard from './UniformCard'
import IframeContainerDialog from "./IframeContainerDialog";

const designDgsData = [
    {
        'title': 'ud.resume.atzu68.com',
        'image': 'https://lucid.app/publicSegments/view/fb8b056b-734c-4034-b34d-a86a29b0e631/image.png',
        'url': 'https://lucid.app/documents/embeddedchart/1f4c67fa-cc11-42ef-9027-eaf6941bfc66?invitationId=inv_9e8336d1-0c97-415b-b0ae-a0174cb5caf0#'
    }
]
const designDgsTitleToData = designDgsData.reduce((previousValue, currentValue) => {
    previousValue[currentValue.title] = currentValue
    return previousValue
}, {})
console.log(designDgsTitleToData)

function MetaDesign() {

    const [popoverDg, setPopoverDg] = React.useState(null);

    const onClickDgCard = title => {
        setPopoverDg(title)
    }

    const onCloseDgDetailDialog = () => {
        setPopoverDg(null)
    }

    return (
        <Fragment>
            <Divider style={{height: 12}}/>

            {designDgsData.map(dgDatum => {
                return (
                    <UniformCard style={{backgroundColor: grey[400]}}>
                        <CardActionArea onClick={onClickDgCard.bind(null, dgDatum.title)}>
                            <CardMedia
                                image={dgDatum.image}
                                title={dgDatum.title}
                                style={{height: 200}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="button">
                                    {dgDatum.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </UniformCard>
                )
            })}
            {popoverDg && (
                <IframeContainerDialog
                    url={designDgsTitleToData[popoverDg].url}
                    title={popoverDg}
                    onClose={onCloseDgDetailDialog}
                />
            )}
        </Fragment>
    )
}

export default MetaDesign