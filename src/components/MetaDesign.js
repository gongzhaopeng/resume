import React, {Fragment} from 'react';

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import {grey} from '@material-ui/core/colors';

import UniformCard from './UniformCard'
import IframeContainerDialog from "./IframeContainerDialog";
import ImageScaleUpDialog from "./ImageScaleUpDialog";

const designDgsData = [
    {
        'title': 'vision.resume.atzu68.com',
        'image': 'https://lucid.app/publicSegments/view/f588d0fd-5cd5-4d3d-86ad-d48f6d1b07a6/image.png',
        'scaleUpRatio': 3
    },
    {
        'title': 'mindmap.product.backlog.resume.atzu68.com',
        'image': 'https://lucid.app/publicSegments/view/cc415a13-e213-4437-a9f0-2b59fad6954a/image.png',
        'url': 'https://lucid.app/documents/embeddedchart/9b620cab-59e8-49e6-b0f2-55b649bd2e5b?invitationId=inv_780ba4e6-abfc-4d12-ba9b-5f6b2f150fac#'
    },
    {
        'title': 'gen-info.me.mindmap.pb.resume.atzu68.com',
        'image': 'https://lucid.app/publicSegments/view/df1eac74-60b0-40aa-82d1-afa68412df80/image.png',
        'url': 'https://lucid.app/documents/embeddedchart/276d6d0b-eace-4b85-8141-998e519d7017?invitationId=inv_3fbc92bf-a2c7-45d3-b2f3-9b4b6606e7c0#'
    },
]
const designDgsTitleToData = designDgsData.reduce((previousValue, currentValue) => {
    previousValue[currentValue.title] = currentValue
    return previousValue
}, {})

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
                    <UniformCard key={dgDatum.title} style={{backgroundColor: grey[400]}}>
                        <CardActionArea onClick={onClickDgCard.bind(null, dgDatum.title)}>
                            <CardMedia
                                image={dgDatum.image}
                                title={dgDatum.title}
                                style={{height: 0, paddingTop: '56.25%'}}
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
            {popoverDg && (designDgsTitleToData[popoverDg].url ? (
                <IframeContainerDialog
                    title={popoverDg}
                    url={designDgsTitleToData[popoverDg].url}
                    onClose={onCloseDgDetailDialog}
                />) : (
                <ImageScaleUpDialog
                    image={designDgsTitleToData[popoverDg].image}
                    title={popoverDg}
                    scaleUpRatio={designDgsTitleToData[popoverDg].scaleUpRatio}
                    onClose={onCloseDgDetailDialog}
                />
            ))}
        </Fragment>
    )
}

export default MetaDesign