import { ContainerTags, DivCheckbox, Texto, TituloTags } from "./styled";


function Tags() {
    
    return(
        <>
        <ContainerTags>
            <TituloTags>Tags</TituloTags>
            <DivCheckbox>
                <input type="checkbox" value='Internacionais'/>
                <Texto>Internacionais</Texto>
            </DivCheckbox>
            <DivCheckbox>
                <input type="checkbox" value='Nacionais'/>
                <Texto>Nacionais</Texto>
            </DivCheckbox>
            <DivCheckbox>
                <input type="checkbox" value='Pop'/>
                <Texto>Pop</Texto>
            </DivCheckbox>
            <DivCheckbox>
                <input type="checkbox" value='Rock'/>
                <Texto>Rock</Texto>
            </DivCheckbox>
            <DivCheckbox>
                <input type="checkbox" value='Pop rock'/>
                <Texto>Pop rock</Texto>
            </DivCheckbox>
            <DivCheckbox>
                <input type="checkbox" value='Indie rock'/>
                <Texto>Indie rock</Texto>
            </DivCheckbox>
            <DivCheckbox>
                <input type="checkbox" value='MPB'/>
                <Texto>MPB</Texto>
            </DivCheckbox>
            
        </ContainerTags>
        </>
    )
}

export default Tags;