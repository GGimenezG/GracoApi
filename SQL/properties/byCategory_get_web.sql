CREATE PROCEDURE `propertyByCategory_get_web`()
BEGIN
-- Declaramos variables a usar
	
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
  
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
		   p.Coins_idCoins as idCoins, ci.name as nameCoins, p.idPost,
			GROUP_CONCAT(DISTINCT phc.Categories_idCategories SEPARATOR ', ') as postCategories
	FROM properties p
	INNER JOIN postshascategories phc ON phc.Posts_idPosts = p.idPost
    INNER JOIN propertiesimages pi ON pi.idProperty = p.idProperties and pi.order = 1
	INNER JOIN communes c ON c.idCommunes = p.Communes_idCommunes 
	INNER JOIN cities ct ON ct.idCities = c.Cities_idCities 
	INNER JOIN parkinglots pk ON pk.idParkingLots = p.ParkingLots_idParkingLots 
	INNER JOIN cellars cl ON cl.idCellars = p.Cellars_idCellars 
	INNER JOIN bathrooms bt ON bt.idBathrooms = p.Bathrooms_idBathrooms1 
	INNER JOIN bedrooms bd ON bd.idBedrooms = p.Bedrooms_idBedrooms 
	INNER JOIN coins ci ON ci.idCoins = p.Coins_idCoins 
	WHERE p.status = 'A' 
	group by p.idPost;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END