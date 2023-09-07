CREATE PROCEDURE `properties_get_web`(
	IN iIdCategory INT,
    IN iIdTypeOfOperation INT,
    IN iCityOrCommune VARCHAR(255)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
		IF iIdCategory != 0 AND iIdTypeOfOperation != 0 THEN
			SELECT p.idProperties as id, p.description, p.address, p.isUsed, p.squareMeter, p.isFurnished,
				   p.connectorForWashingMachine, p.orientation, p.antiquity, p.hasAPool, p.hasAGrill, p.hasABikeRack, 
                   p.hasAEventHall, p.condominium, p.hasATerrace, p.commonExpenses, p.squareMetersOfLand,
                   p.price, p.urlMatterport , p.refLongitude as longitude , p.refLatitude as latitude, 
                   pi.url as principalImage, 
                   p.Communes_idCommunes as idCommunes, c.name as nameCommune,
                   c.Cities_idCities as idCity, ct.fullname as fullnameCity, ct.shortname as shortnameCity,
                   p.ParkingLots_idParkingLots as idParkingLots, pk.description as descriptionParkingLots,
                   p.Cellars_idCellars as idCellars, cl.description as descriptionCellar,
                   p.Bathrooms_idBathrooms1 as idBathrooms, bt.description as descriptionBathrooms,
                   p.Bedrooms_idBedrooms as idBedrooms, bd.description as descriptionBedrooms,
                   p.Coins_idCoins as idCoins, ci.name as nameCoins, p.idPost, p.portNumber  
			FROM properties p 
            INNER JOIN propertiesimages pi ON pi.idProperty = p.idProperties and pi.order = 1
            INNER JOIN communes c ON c.idCommunes = p.Communes_idCommunes 
            INNER JOIN cities ct ON ct.idCities = c.Cities_idCities 
            INNER JOIN parkinglots pk ON pk.idParkingLots = p.ParkingLots_idParkingLots 
            INNER JOIN cellars cl ON cl.idCellars = p.Cellars_idCellars 
            INNER JOIN bathrooms bt ON bt.idBathrooms = p.Bathrooms_idBathrooms1 
            INNER JOIN bedrooms bd ON bd.idBedrooms = p.Bedrooms_idBedrooms 
            INNER JOIN coins ci ON ci.idCoins = p.Coins_idCoins 
            INNER JOIN propertieshascategoriesproperties phcp ON phcp.Properties_idProperties = p.idProperties AND phcp.CategoriesProperties_idCategoriesProperties = iIdCategory
            INNER JOIN typesofoperationshasproperties thcp ON thcp.Properties_idProperties = p.idProperties AND thcp.TypesOfOperations_idTypesOfOperations = iIdTypeOfOperation
			WHERE p.status = 'A' AND 
            ( 	c.name LIKE CONCAT('%',iCityOrCommune,'%') OR 
				ct.fullname LIKE CONCAT('%',iCityOrCommune,'%') OR 
                ct.shortname LIKE CONCAT('%',iCityOrCommune,'%')
                );
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SET oRes = 0;
			SET oMessage = 'Record doesn`t exist';
		END IF;
    SELECT oRes as success, oMessage as message;
END