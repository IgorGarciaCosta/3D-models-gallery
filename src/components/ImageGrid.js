import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ModelImage from '../components/ModelImage';
import { Grid } from '@material-ui/core'

class ImageGrid extends React.Component {
    render() {
        return (
            <Grid lg={12} item container spacing={0}>
                <Grid item lg={4} xs={6}><ModelImage title="Luffy-1" url="https://modelos3d6.webnode.com/_files/200000023-a38caa38cc/luffy2.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Luffy-2" url="https://modelos3d6.webnode.com/_files/200000021-6837768379/luffy5.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Luffy-3" url="https://modelos3d6.webnode.com/_files/200000022-18fe218fe4/luffy4.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Hand-1" url="https://modelos3d6.webnode.com/_files/200000000-2bb3e2bb40/hand1.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Hand-2" url="https://modelos3d6.webnode.com/_files/200000001-12a9112a93/hand2.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Hand-3" url="https://modelos3d6.webnode.com/_files/200000002-242e0242e2/hand4.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Hand-4" url="https://modelos3d6.webnode.com/_files/200000003-a8b34a8b36/hand3.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Male model-1" url="https://modelos3d6.webnode.com/_files/200000006-7040a7040b/guy1.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Male model-2" url="https://modelos3d6.webnode.com/_files/200000005-e34a7e34a9/guy2.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Male model-3" url="https://modelos3d6.webnode.com/_files/200000004-7fb5c7fb5f/guy3.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Female Warrior-1" url="https://modelos3d6.webnode.com/_files/200000010-c72d2c72d4/print32.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Female Warrior-2" url="https://modelos3d6.webnode.com/_files/200000008-4b4104b413/print42.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Female Warrior-3" url="https://modelos3d6.webnode.com/_files/200000007-8cfa08cfa1/print52.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Female Warrior-4" url="https://modelos3d6.webnode.com/_files/200000009-465f7465f9/print22.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Farm Boy-1" url="https://modelos3d6.webnode.com/_files/200000012-9e8ac9e8af/farmBoy3.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Farm Boy-2" url="https://modelos3d6.webnode.com/_files/200000013-3663236634/farmBoy5.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Farm Boy-3" url="https://modelos3d6.webnode.com/_files/200000014-e8e0ae8e0d/farmBoy1.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Kratos Android-1" url="https://modelos3d6.webnode.com/_files/200000018-e4211e4213/android1.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Kratos Android-2" url="https://modelos3d6.webnode.com/_files/200000019-d4b93d4b94/android2.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Kratos Android-3" url="https://modelos3d6.webnode.com/_files/200000020-8cea98ceab/android3.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Girl Model-1" url="https://modelos3d6.webnode.com/_files/200000015-5dfe55dfe8/busto2.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Girl Model-2" url="https://modelos3d6.webnode.com/_files/200000016-4611f46121/busto3.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Girl Model-3" url="https://modelos3d6.webnode.com/_files/200000017-ee3d6ee3d8/busto1.png" /></Grid>
                <Grid item lg={4} xs={6}><ModelImage title="Kingdom Hearts Stitch Way Finder" url="https://modelos3d6.webnode.com/_files/200000011-3f3a53f3a7/waiFinder.png" /></Grid>
            </Grid>
        );
    }
}


export default ImageGrid;
